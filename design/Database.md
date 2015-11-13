This document is to describe table sachems

* Table: Users

Field  | Type  | Key   | Description
-------| ----- | ----- | -----------
name   | Text  | No    | Name to show
email  | Text  | No    | email to search in VCS
email_alt   | Text  | No    | Alternative to search in VCS
github_id | Text | No | ID of github
report_to | Text | No | UUID of manager
employer | Text | No | Current employer
photo | Text | No | Path of photo
bio | Text | No | Self-introduction
tags | Text | No | Tags to category the users

* Table: Repos

Field  | Type  | Key   | Description
-------| ----- | ----- | -----------
name   | Text  | No    |
url  | Text  | No    |
online_viewer | Text | No | Online viewer URL to show commit detailed information
tags | Text | No | Tags to category the repos

* Table: Cached

Field  | Type  | Key   | Description
-------| ----- | ----- | -----------
github_id | Text   | Yes    | changeset (from git log)
repo_id | Text | No | equal to one of in Table: Repos
user_id | Text | No | equal to one of in Table: Users
is_manully | Boolean | No | Is the commit added manually or not
commit_time | Text | No | Landing time (from git log)
touched_files | Number | No | Number of files this commit touched (from git log)
addition_lines | Number | No | Number of line this commit added (from git log)
deletion_lines | Number | No | Number of line this commit delete (from git log)
