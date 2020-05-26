import base64 
import numpy as np 
import io 
from PIL import Image 
import keras 
from keras import backend as K 
from keras.models import Sequential 
from keras.models import load_model 
from keras.preprocessing.image import ImageDataGenerator 
from keras.preprocessing.image import img_to_array 
from flask import request 
from flask import jsonify 
from flask import Flask 
from flask import render_template
import os
import pickle
import tensorflow as tf
graph = tf.get_default_graph()
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from tensorflow.keras.utils import to_categorical
from sklearn.preprocessing import LabelBinarizer
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import load_model

import numpy as np
import argparse
import cv2
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename


app = Flask(__name__) 


@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file1():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      
      return 'file uploaded successfully'



# web site routing

@app.route('/')
def index():
     return render_template('index.html')
@app.route('/home')
def home():
     return render_template('index.html')
# coronavirus status
@app.route('/status')
def status():
     return render_template('status.html')
# take test
@app.route('/taketest')
def taketest():
     return render_template('taketest.html')
# about
@app.route('/about')
def about():
     return render_template('about.html')
# about
@app.route('/essential')
def essential():
     return render_template('essential.html')






@app.route("/predict", methods=['POST'])
def predict():
   
    f = request.files['file']
    f.save(secure_filename(f.filename))
    file_name = f.filename
    # message = request.get_json(force =True)
    imagePath = file_name
    passimg = imagePath
    model = load_model('./data/covid19.model')
    print('Hello world!')
    image = cv2.imread(passimg)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, (224, 224))
    image = image/255.0
    predIdxs = model.predict(image.reshape(1,224,224,3))
    resultpredict = np.argmax(predIdxs)
    print('resultpredict', resultpredict)
    resultString = str(resultpredict)
    
    resultProb1 = str(predIdxs[0,0])
    resultProb2 = str(predIdxs[0,1])
    covidresult = resultString
    response = {
    'prediction': resultString
    }
    # return  (jsonify(response))
    return render_template('result.html', result=resultString, prob1 = resultProb1, prob2 = resultProb2)





@app.route('/result')
def result():
      return render_template('result.html')



if __name__=="__main__":
    #  app.run(host='0.0.0.0')
    app.run()
