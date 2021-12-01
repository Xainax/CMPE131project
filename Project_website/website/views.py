from flask import Blueprint, render_template, request, jsonify
from flask.helpers import flash
from flask_login import login_required, current_user
from .models import Note
from . import db
import json

views = Blueprint('views', __name__)
events = [
    {
        'todo' : 'Event',
        'date' : '2021-12-01',
    },
    {
        'todo' : 'Eat Hotpot',
        'date' : '2021-12-02',
    }
]


@views.route('/', methods=['GET', 'Post'])
@login_required
def home():
    if request.method == 'POST':
        note = request.form.get('note')

        if len(note) < 1:
            flash('Note is too short.', category='error')
        else:
            new_note = Note(data=note, user_id=current_user.id)
            db.session.add(new_note)
            db.session.commit()
            flash('Note added', category='success')

    return render_template("home.html", user=current_user)


@views.route('/calendar')
@login_required
def calendar():
    return render_template("calendar.html", user=current_user)


@views.route('/delete-note', methods=['POST'])
def delete_note():
    note = json.loads(request.data)
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()

    return jsonify({})
