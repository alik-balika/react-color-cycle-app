# Color Cycle React App

Project Idea from https://github.com/florinpop17/app-ideas/tree/master?tab=readme-ov-file

Please access the demo at: https://alik-balika.github.io/react-color-cycle-app/

**Tier:** 1-Beginner

The use of color plays a major role in an applications User Interface and
User Experience (UI/UX). ColorCycle seeks to help WebDev's better understand
RBG colors by making small changes to a colored box over time.

This app draws a box filled with a user specified color and makes small changes
over time also based on user input. In other words, from cycles through
changes to the originally specified color. These changes allow the user to
experience the visual impact different changes to the individual parts of
an RGB color specification (e.g. `#000000` color code).

## User Stories

- [x] User can specify a starting fill color as a six hexadecimal standard
      CSS color code in three individual components of two digits each - red,
      blue, and green
- [x] User can specify an increment value for each color component that will
      be added to that component every .25 second
- [x] User can see the box containing the fill color change every .25 seconds
- [x] User can only change the color components and their increments when
      the app is stopped
- [x] User can start and stop the fill operation using a button whose name
      changes to 'Start' when stopped and 'Stop' when started
- [x] User will receive an warning if something other than hexadecimal digits
      are entered for the color components
      **(in my solution, user input only allows for hexadecimal digits)**

## Bonus features

- [ ] User can change the time interval between color changes
- [ ] User can specify the color encoding format used from RGB to another format like HSL

## Useful links and resources

[CSS Color Codes](https://qhmit.com/css/css_color_codes.cfm)

## Example projects

[CSS Color Changing Background](https://codepen.io/SoumyajitChand/pen/wjKVed)
