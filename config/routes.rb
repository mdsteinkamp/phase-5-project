Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :users, only: [:index, :show]
  resources :ingredients, only: [:index, :show, :create]
  resources :foodstuffs, only: [:index, :create]
  resources :recipes, only: [:index, :show, :create]
  resources :pantry_items
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
