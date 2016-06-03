##### project_03 By Adam Reid

# Bay Trails
---
Bay Trails, is a web app for avid hikers who like to get out and see what hiking trails are
in the bay area of San Francisco. Bay Trails provides  quick search functions for location and trail name.
The user will be able to like trails and have them stored in their profile for quick reference later on.

Bay Trails has its own API, thus to keep the API and trail information correct to the trail. A User can add trails
to the site. These trails will first go through Admin to verify information of the trail before approving it to main trail page.

---

####Link to working app:
[Bay Trails](https://bay-trails.herokuapp.com/)

####Link my GitHub:
[GitHub](https://github.com/adamrobertreid/project_03)

---
####List of the technologies used.
* MongoDB
* Express
* Angular 1.5
* Node
* Mongoose
* JQuery (to handle materialize CDN library)
* PhotoShop
* HTML
* CSS
* Materialize CSS
* Uploadcare
* Satelizer
* Heroku
* GitHub



## App Setup
#### Installation Steps

1. Clone or branch my repo.

1. From inside the project directoy, run `npm install` to install the required node modules.

1. If you do not see bower componets in your Atom,  run `bower install`.

1. In one Terminal window, run `mongod`, and in another, run `nodemon`.

1. Run the seed tasks (`node seed.js`) to create a default user and some posts.

1. Go to `localhost:3000` in your Chrome browser. If you see an error in your developers console follow the next step.
  * > You should see `Error: ENOENT, no such file or directory '.env'` in your terminal

1. To fix it, add a "dot env" file, called **`.env`**, to the root directory. Add this line to the file:

  ```
  TOKEN_SECRET=yoursupersecrettoken
  ```

---
#### User Stories
[User stories](https://trello.com/b/AwRzscfl)

#### Wireframes
[Wireframes & Relationship diagram](https://drive.google.com/file/d/0B-TMj14DLOx_RUFFcTRFekpGT3M/view?usp=sharing)


---
### Unsolved problems
* User can like trail more than once
* Modal on fire from submit of new trail prevents new trail from being submitted

### Future Features
* Turn boolean value inputs and options into checkboxes or buttons
* Google maps intergration to allow users to see a large map on trails search page showing trails by location pin drop.
* Have a google map appear in single page view which has link to give user directions in Google Maps app to that trail location
  from their location.
* Allow users to make comments on trails that they like with updates or stories of their experience.
* Make uploaded picure editable by Admin account.
