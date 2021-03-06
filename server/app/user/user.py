from datetime import date

from flask import Blueprint, request, render_template, make_response, jsonify
import json

from service.errors.user_errors.AuthenticationError import AuthenticationError
from service.mongo_db.db_client import save_user, get_user_by_id
from service.mongo_db.db_client import get_user_by_email
from service.mongo_db.db_entities import User
import uuid

user_blueprint = Blueprint('user_blueprint', __name__, static_folder='../static')
headers = {"Content-Type": "application/json"}


@user_blueprint.route('/user', methods=['POST'])
def create_user():
    body = json.loads(request.data)
    email = body.get('email')
    password = body.get('password')
    # description = body.get('description')
    # pic = body.get('pic')
    uid = generate_uid()
    # user = User(email=email, password=password, description=description, pic=pic, uid=uid)
    user = create_default_user(email=email, password=password, uid=uid)
    save_user(user)

    return jsonify({"id": uid, "success": True}), 200


@user_blueprint.route('/login', methods=['POST'])
def get_user():
    body = json.loads(request.data)
    email = body.get('email')
    user_result = get_user_by_email(email=email)
    password = body.get('password')
    if password != user_result['password']:
        raise AuthenticationError("incorrect password.")
    uid = user_result["uid"]

    return jsonify({"id": uid, "success": True}), 200


def generate_uid():
    return str(uuid.uuid4())


def create_default_user(email: str, password: str, uid: str):
    default_name = 'Israel Israeli'
    default_title = 'your main occupation, e.g cs student'
    default_main_description = 'your main occupation, e.g cs student'
    default_description = 'Tell us about you:'
    default_programming_languages = 'c, Java, etc...'
    default_skills = 'react, '
    default_experience = 'mention your current and past roles in projects and jobs'
    default_birth_date = '5.5.1875'
    default_address = 'TLV fashion mall'
    default_phone = '051113345'
    default_projects = []

    # not_available_val = 'N/A'
    return User(
        email=email, password=password, uid=uid, description=default_description, name=default_name,
        projects=default_projects, programming_languages=default_programming_languages, skills=default_skills, experience=default_experience,
        date_of_birth=default_birth_date, address=default_address, phone=default_phone, title=default_title, main_description=default_main_description)

