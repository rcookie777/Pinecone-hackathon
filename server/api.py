from flask import Flask, request

app = Flask(__name__)

@app.route('/uploads', methods=['POST'])
def get_uploads():
    pass

@app.route('/upload', methods=['POST'])
def upload():
    pass

@app.route('/login', methods=['POST'])
def login():
    pass

if __name__ == '__main__':
    app.run()
