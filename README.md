# moms-library
An ISBN database &amp; app for tracking who's got your books!


## To do

 - Find a database
   - postgreSQL sort of in progress, it seems like a good option
   - Or just a json file if security is sketch or I get lazy cause small scale

 - use api.isbndb.com for book info
   - Subscription & api hookup will be the _very_ last step

 - user interface
   - Add/remove book from library
      - "are you sure?" for add dupes and remove
   - Check in/out book from library
   - Current books in/out
      - Specific book in out
   - search by student for book list

 - search your library by:
   - Author
   - Title
   - ISBN
   - Student ID

 - Create UUID for each book in library (for dupes of books)
   - PostgreSQL has no internal thing, probs do in javascript
