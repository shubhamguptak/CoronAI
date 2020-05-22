import os
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

model = load_model('./data/covid19.model')

def predict(imagePath):
    image = cv2.imread(imagePath)
    # image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # image = cv2.resize(image, (224, 224))
    # image = image/255.0
    # predIdxs = model.predict(image.reshape(1,224,224,3))
    predIdxs = model.predict(image)
    return predIdxs
    # return np.argmax(predIdxs)


if __name__=="__main__":

    # print(predict("./data/dataset/testXray/3.jpg"))
      print(predict("./data/dataset/normal/person1935_bacteria_4849.jpeg"))
    # print(predict("./data/dataset/covid/Covid (2).jpg"))
    # print(predict("./data/dataset/normal/IM-0466-0001.jpeg"))
    
