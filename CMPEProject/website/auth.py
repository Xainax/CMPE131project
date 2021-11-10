from flask import Blueprint, render_template, request, flash

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    return render_template("login.html")


@auth.route('/logout')
def logout():
    return "<p>Logout</p>"


@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        # checks for valid info
        if '@' not in email:
            flash('Email must contain an @ symbol to be valid.', category='error')
        elif len(firstName) < 2:
            flash('First name must contain more than 1 character to be valid.', category='error')
        elif len(password1) > 8:  # Password should contain special chars?
            flash('Password must be at least 8 characters to be valid.', category='error')
        elif password1 != password2:
            flash('Passwords do not match', category='error')
        else:
            # add user
            flash('Account creation successful', category='success')

    return render_template("sign_up.html")
