# Programming Challenge

Congratulations on being selected to participate in our technical test. It consists of a programming challenge and it will address different skills. Read the instructions carefully and we wish you the best of luck.

## Before You Start

Fork this repository and once you have finished your challenge, grant access to the Github user "kavlac". Upload all your deliverables to your forked repository. We will use it to evaluate your test according to the rubric detailed at the end of this document.

## Introduction

We want you to develop a project that makes uses of the FIFA 21 dataset. It consists of three goals and the details on each one of them is given below.

## Preparing the Data

The first goal of this challenge is to obtain and prepare the data you will work with.

In order to do so, you must download the [dataset available in this repository](https://github.com/kavlac/programming-challenge-full-stack-september-2021/blob/main/players_21.zip). You are responsible for understanding how the data is stored in this dataset and how it is structured.

Then, you are asked to write a program to read the input files for the dataset and create a database out of it. You can choose to use the database in memory, in files, or in a database management system, as long as you process and consume this data in the upcoming parts.

## Making the Data Available

The second goal of this challenge is to make the processed data available for consumption.

To do such, you must implement a REST API in and it should provide the following methods:
- List all players (using pagination): we want to know what players are stored in your database;
- List players by name: given a name, we want to know what players match such name;
- List players by team: given a team, we want to know what players match such team;
- List players by league: given a league, we want to know what players match such league;
- List players by nationality: given a nationality, we want to know what players match such nationality;
- List players by position: given a position, we want to know what players match such position;
- List player details: given an id, we want to know the most relevant details of the player (including their picture) that matches such id;
- List top-K players: given an integer K, we want to know the best K players according to their overall;
- List top-K players by position: given an integer K and a position, we want to know the best K players that match such position;
- List top-K players by nationality: given an integer K and a nationality, we want to know the best K players that match such nationality;
- List top-K players by league: given an integer K and a league, we want to know the best K players that match such league;
- List the best team: we want to know the best players that can form a squad;
- List the best team by league: we want to know the best players that can form a squad;
- List the best team by nationality: we want to know the best players that can form a squad.

Tips:
- A suggested squad is formed of: 1 goalkeeper (GK), 2 center backs (CB), 1 left back (LB), 1 right back (RB), 2 center midfields (CM), 1 left midfield (LM), 1 right midfield (RM), and 2 strikers (ST);
- In order to get player's picture, you should get player's `sofifa_id` and use it into the SoFIFA CND url. For instance, if you want Messi's picture, you can use the following url: https://cdn.sofifa.com/players/158/023/21_360.png. Note that **158023** is Messi's `sofifa_id`.

## Consuming the Data

The third goal of this challenge is to consume the methods of the REST API.

Thus, you are asked to implement a client application (desktop, mobile, or web) that accesses such an API. It must have a graphical interface to interact with users to consume the methods above. It is up to you how to design the user interface, as long as it is usable.

## Deliverables

You must provide the following artifacts:
- The source-code of the programs that you implemented;
- A set of instructions on how to prepare the environment, build the programs, run each part of the challenge, and how to use your project;
- Comments on what technologies and patterns you used and the reasons to do so, as well as the decisions you made throughout the challenge;
- Any other artifact you find relevant for your overall evaluation.

## Tips

- Make sure your instructions are easy to follow and that each step works as expected;
- Our main environment is Windows, so please make sure that your solution works on it;
- If you want, you can show us how you can set up your project using Docker;
- We suggest you implement the challenge using the following languages (you can use more than one of them if you want): C#, Java, and/or JavaScript;
- Testing is more than welcome;
- Show us everything you know about best practices in Git;
- Think carefully about your code quality, in terms of maintainability, readability, and simplicity;
- Do not overengineer your solution.

## Project Rubric

### Version Control

- [ ] Is the repository accessible?

GitHub user kavlac has access to the repository.

- [ ] Is the code properly versioned?

The repository contains a list of commits specifying the changes made along the development. Commit messages are short and concise.

### Application Setup

- [ ] Is the application easy to install and start?

It is provided detailed specifications about how to install and launch the applications. It should be simple to run on any windows machine.

- [ ] Does the application includes a README with clear installation and launch instructions?

An updated README that describes the project and has instructions for installing and launching the project is included.

### API

- [ ] Does the API exposes all mandatory endpoints?

Following endpoints are mandatory: List all players, list players by name, list players by team, list players by league, list players by nationality, list players by position, list players details, list top-K players, list top-K players by position, list top-K players by nationality, and list top-K players by league.

- [ ] Does the endpoints handle errors properly?

All methods must handle possible errors coming from user input.

### Frontend

- [ ] Does the website allow the user to interact with all APIs?

The website must contain options so user can interact with all APIs methods. You can choose buttons, forms, dropdowns, navigation routes. Be creative, but remember to keep the code clean.

- [ ] Is the navigation intuitive?

The website must be self-explained. It should be simple to access the lists and interpret the results.

### Code Functionality

- [ ] Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation? Is the code formatted properly?

The code runs without errors. There are no warnings that resulted from not following coding best practices. All code is functional and formatted properly.
