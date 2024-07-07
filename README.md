# Vue Location Filter

This project is a Vue.js component for filtering locations based on country and region. It includes a sidebar with searchable checkboxes for filtering countries and regions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Vue Location Filter Component is designed to provide an interactive interface for filtering locations by country and region. It includes a sidebar with searchable input fields and checkboxes to select multiple countries and regions.

## Features

- Sidebar for filtering countries and regions
- Searchable input fields for quick filtering
- Interactive checkboxes for selection
- Uses Font Awesome icons for a better UI experience

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Vue CLI installed globally (`npm install -g @vue/cli`)

### Steps

1. **Clone the repository**:
    ```bash
    cd vue-location-filter
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run serve
    ```

The application should now be running on `http://localhost:8080`.

## Usage

This component can be used in any Vue.js application. You can integrate it into your application by importing the component and using it in your templates.

### Example

```vue
<template>
  <div>
    <TaskOne />
  </div>
</template>

<script>
import TaskOne from './components/TaskOne.vue';

export default {
  name: 'App',
  components: {
    TaskOne
  }
};
</script>
