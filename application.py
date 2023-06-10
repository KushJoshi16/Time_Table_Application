from flask import Flask, jsonify, request, Response, abort
import pandas as pd
import generator_algo.algorithm as alg
import generator_algo.output_format as outFmat
import json
import logging
import os

# UPLOAD_FOLDER = os.path.join('staticFiles', 'uploads')

logging.basicConfig(filename="logs/app_logs.log",
                    format='%(asctime)s %(message)s',
                    filemode='w')
 
logger = logging.getLogger()
 
application = Flask(__name__)

app = application


@app.route('/')
def Hello_page():
  return 'Hello, The Website is fine!!'

@app.route('/set_inputData',methods=['POST'])
def set_inputData():
    filepath = None
    if 'file' not in request.files:
        abort(400)
    f = request.files['file']
    basepath = os.path.dirname(__file__)
    filepath = os.path.join(basepath,'uploads',f.filename)
    f.save(filepath)
    logger.info("Input data received")
    try:
        data = None
        with open('classes/input.json') as f:
            data = json.load(f)
            
        df = pd.read_csv(filepath)
        df = df.loc[df.astype(str).drop_duplicates().index]
        data['Lectures'] = df.to_dict(orient='records')
        with open('classes/input.json','w') as f:
            json.dump(data,f)

        logger.info("Input data stored in input.json")
        return jsonify(success=True)
    except Exception as e:
        logger.error(e)
        return e
        abort(500)

 
@app.route('/generate_time_table')
def generate_time_table():
    alg.evolutionary_algorithm()
    outFmat.timeTableFromOutput()
    logger.info("Time Table Generated")
    return jsonify(success=True)

@app.route('/get_time_table')
def get_time_table():
    try:
        f = open('classes/TimeTable.json',"r")
        data = json.load(f)
        f.close()
    except Exception as e:
        logger.error(e)
        try:
            alg.evolutionary_algorithm()
            logger.info("Time Table Regenrated")
            outFmat.timeTableFromOutput()
            f = open('classes/TimeTable.json',"r")
            data = json.load(f)
            f.close()
        except Exception as e:
            logger.error(e)
            abort(500)
    logger.info("Data retrived as data and will be returned as json")
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=False)
