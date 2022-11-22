# Lab 8 - Starter
Check my Understanding
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.<br>

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

I would select mannually run them locally before pushing. Since I do not want my repo to have a code with bugs.<br><br>

4) Would you use an end to end test to check if a function is returning the correct output? (yes/no)<br><br>
   No. Unit tests enough for the component of small scale. Just checking a funciton's return does not require an end to end test.

5) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.<br><br>
    No. Messaging feature should involve lots of fuctions to cover. Tester should be able to fill out the form and have to check if the message is in the right form and send them if they are. There should be interactions among them which makes it harder for unitests to check them.

6) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.<br><br>
    Yes. Unit test should be enough for checking the maximum length of the message. We can just grab the function and test inputs of various sizes.