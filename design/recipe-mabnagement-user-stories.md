# User Stories for Recipe Management

## Recipe Creation

### The user creates a new recipe (User)
  - **Trigger**: When the user clicks the "Create Recipe" button
  - **Input**: `recipeName: string`, `ingredients: string[]`, `instructions: string`, `photo: image`
  - **Output**: A new recipe is saved in the system

### The system validates the recipe fields (System)
  - **Trigger**: When the user submits the recipe form
  - **Input**: `recipeName: string`, `ingredients: string[]`, `instructions: string`
  - **Output**:
    - ✅ **If valid** → Proceed to save the recipe
    - ❌ **If invalid** → Show an error message (e.g., "Recipe name is required")

### The user uploads a photo for the recipe (User)
  - **Trigger**: When the user selects a photo file
  - **Input**: `photo: image`
  - **Output**: The photo is displayed as a preview in the form

## Recipe Selection

### The user views a list of recipes (User)
  - **Trigger**: On page load
  - **Input**: None
  - **Output**: A list of recipes is displayed with `recipeName`, `photo`, and a short description

### The user filters recipes by keyword (User)
  - **Trigger**: When the user types in the search bar
  - **Input**: `searchKeyword: string`
  - **Output**: A filtered list of recipes matching the keyword

### The user selects a recipe to view details (User)
  - **Trigger**: When the user clicks on a recipe from the list
  - **Input**: `recipeId: string`
  - **Output**: The recipe details are displayed, including `recipeName`, `ingredients`, `instructions`, and `photo`

## Error Handling

### The system handles invalid input during recipe creation (System)
  - **Trigger**: When the user submits the recipe form with invalid data
  - **Input**: `recipeName: string`, `ingredients: string[]`, `instructions: string`
  - **Output**: Show an error message (e.g., "Recipe name cannot be empty")

### The system handles missing photo uploads (System)
  - **Trigger**: When the user submits the recipe form without a photo
  - **Input**: None
  - **Output**: Show an error message (e.g., "A photo is required for the recipe")