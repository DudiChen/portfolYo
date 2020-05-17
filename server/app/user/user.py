from flask import Blueprint, render_template
import json
from server.service.mongo_db.mongo_client import save_user
from server.service.mongo_db.db_entities import User

user_blueprint = Blueprint('user_blueprint', __name__, static_folder='../static')
headers = {"Content-Type": "application/json"}

@user_blueprint.route('/user', methods=['POST'])
def create_user():
    # Todo: debug, build response, exception handling
    body = json.loads(request.data)
    email = body.get('email')
    password = body.get('password')
    description = body.get('description')
    pic = body.get('pic')

    user = User(email=email, password=password, description=description, pic=pic)

    save_user(user)

    return "user created successfully "
