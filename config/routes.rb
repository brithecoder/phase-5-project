Rails.application.routes.draw do
  resources :user_events 
  resources :users, only: [:create]
  resources :user_brands
  resources :brands
  resources :brand_events
  resources :events
  resources :api, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login/' => 'sessions#create'
  delete '/logout/' => 'sessions#destroy'
  get '/me/' => 'users#show'
end
