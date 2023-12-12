Rails.application.routes.draw do
  resources :ingredients
  resources :foodstuffs, only: [:create]
  resources :recipes, only: [:create]
  resources :pantry_items
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
