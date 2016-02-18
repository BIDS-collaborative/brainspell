# brainspell

`brainspell` is a web platform to facilitate the creation of an open, human-curated, classification of the neuroimaging literature.

The BIDS collaborative fork of the brainspell project. Useful innovations will
be merged upstream into @r03ert0's repo (see the "forked from" link at the top
of our GitHub page).

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/BIDS-collaborative/brainspell?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Running brainspell locally
* create a database using the sql script brainspell_db.sql
* create a base.php file by adapting base.php.example to contain the user/pass to your database
* create a virtual host for brainspell in localhost
* configure apache to redirect 404 errors to the script 404.php (used for URL rewriting)

# Running brainspell docker: 

see README in dockerfiles directory

