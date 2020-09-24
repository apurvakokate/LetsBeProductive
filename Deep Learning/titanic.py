import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import xgboost

# Input data files are available in the "../input/" directory.
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory

import os

classifiers = []
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))
        if filename=='train.csv':
            data = pd.read_csv(os.path.join(dirname, filename))
            X = data[['Pclass', 'Age', 'SibSp', 'Parch', 'Fare']]
            X['Sex']=0
            X.loc[data['Sex'] == 'female','Sex'] = 1
            Y = data['Survived']
            model = xgboost.XGBClassifier()
            classifiers.append(model)
            for clf in classifiers:
                print(Y)
                clf.fit(X,Y)
        if filename=='test.csv':
            data = pd.read_csv(os.path.join(dirname, filename))
            Xtest = data[['Pclass', 'Age', 'SibSp', 'Parch', 'Fare']]
            Xtest['Sex']=0
            Xtest.loc[data['Sex'] == 'female','Sex'] = 1
            passenger = data['PassengerId']
            output = data
            output['Survived'] = 0
        
    for clr in classifiers:
        yPred = clf.predict(Xtest)
        output.loc[yPred>0.5,'Survived'] = 1
        print(output['Survived'])
        print("YPRED")
        df = pd.DataFrame({'PassengerId': passenger,
                   'Survived': output['Survived']})
