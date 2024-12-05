# Incorrect useState Usage in a Loop

This repository demonstrates a common mistake when using the `useState` hook in React: calling it multiple times within a loop.  This leads to unexpected behavior, as only the final state update is preserved.

## Problem

The `useState` hook is designed to manage state within a functional component. When called multiple times in quick succession (such as within a loop) only the final state update is retained, potentially leading to unexpected side effects and making debugging difficult.

## Solution

The ideal solution is to update state once with all the data combined.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.