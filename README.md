# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

## Mobile

![](/screenshots/screenshot-mobile.png)

- Mobile Active

![](/screenshots/screenshot-mobile-active.png)

### Links

- Solution URL: [GitHub](https://github.com/IagoBomfim/expenses-chart-component.git)
- Live Site URL: [Live site](https://charming-duckanoo-dce491.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

in this project i have to learn a bit about the Canvas tag, where it was used to add and render by my s and lib a column chart.

```html
<canvas id="chart-canvas"></canvas>
```

Through this project, you get to know the Chart Js library, this lib is used to create dynamic charts on the user's screen, injecting the chart directly into the DOM by the HTML Canvas tag

```js
import { data } from './data.js';
const ctx = document.getElementById('chart-canvas');

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(row => row.day),
    datasets: [
      {
        data: data.map(row => row.amount),
        backgroundColor: '#ec775f',
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        showLine: false,
        line: { pointRadius: 0}
      }
    ]
  },
  options: {
    showLine: false,
    layout: {
      autoPadding: true
    },
    elements: {
      point: {
        radius: 0 // default to disabled in all datasets
      }
    },
    scales: {
      x: {},
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#ec775f',
          font: 18
        }
      }
    }
  }
});
```

### Useful resources

```html
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

- [ChartJs documentation](https://www.chartjs.org/docs/latest/) - ChartJs library documentation, where it helped me understand the lib's features, and how to customize it to be as similar as possible to the designer proposed in the challenge.

## Author

- Frontend Mentor - [@IagoBomfim](https://www.frontendmentor.io/profile/IagoBomfim)
