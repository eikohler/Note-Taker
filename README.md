# Note Taker Application

I was tasked with creating a note taker application using express js to build a functioning api that could GET all the notes in the data json file, and POST new notes to the file as well. Furthermore, the front-end of the application was pre-coded so I needed to build the html routes that would display the index and notes html files from a GET request as well. The application can be used to add note, view all notes as well as delete notes. Deleting notes was done through a DELETE request that searches through the data json by id and removes the corresponding element and then rewrites the data json file again. The application is hosted through heroku.
The application was tested using jest module. Each note entry has a unique ID generated through uuid module.

Application URL: https://blooming-garden-85714.herokuapp.com/