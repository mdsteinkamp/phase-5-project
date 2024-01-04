Rails.application.routes.draw do
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/available_recipes" to: "recipes#available_recipes"
  
  resources :users, only: [:index, :show]
  resources :ingredients
  resources :foodstuffs, only: [:index, :create]
  resources :recipes, only: [:index, :show, :create]
  resources :pantry_items
  
  
end
