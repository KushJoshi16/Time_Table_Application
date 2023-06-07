from flask import Flask, jsonify, request, Response, abort
import generator_algo.algorithm as alg
import json
import logging

logging.basicConfig(filename="logs/app_logs.log",
                    format='%(asctime)s %(message)s',
                    filemode='w')
 
logger = logging.getLogger()
 
application = Flask(__name__)

app = application


@app.route('/')
def Hello_page():
  return 'Hello, The Website is fine!'

@app.route('/set_inputData',methods=['POST'])
def set_inputData():
    input_data  = request.get_json()
    logger.info("Input data received")
    f = open("classes/input.json","w")
    json.dump(input_data, f)
    f.close()
    logger.info("Input data stored in input.json")
    return jsonify(success=True)
 
@app.route('/generate_time_table')
def generate_time_table():
    alg.evolutionary_algorithm()
    logger.info("Time Table Generated")
    return jsonify(success=True)

@app.route('/get_time_table')
def get_time_table():
    try:
        f = open('classes/output.json',"r")
        data = json.load(f)
        f.close()
    except Exception as e:
        logger.error(e)
        try:
            alg.evolutionary_algorithm()
            logger.info("Time Table Regenrated")
            f = open('classes/output.json',"r")
            data = json.load(f)
            f.close()
        except Exception as e:
            logger.error(e)
            abort(500)
    logger.info("Data retrived as data and will be returned as json")
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
