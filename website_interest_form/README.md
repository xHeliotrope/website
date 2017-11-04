# CFTP User capture form

This microservice accepts user information from a form and saves it to our db for later review.


# SCHEMA
```
CREATE TABLE form_entry (email VARCHAR(255), name VARCHAR(255), heard_of_us TEXT, want_to_accomplish TEXT);
```

# Environment Variables
* PORT - what port to listen on

* DATABASE_HOST - host address. Likely 127.0.0.1 for our uses atm.

* DATABASE_USERNAME - db username

* DATABASE_PASSWORD - db password

* DATABASE_DB - db name