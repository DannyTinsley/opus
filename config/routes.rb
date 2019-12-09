Rails.application.routes.draw do
  get 'reviews/index'
  get 'reviews/create'
  get 'reviews/show'
  get 'reviews/destroy'
  post 'reviews/create'
  delete '/destroy/:id', to: 'reviews#destroy'
  get '/show/:id', to: 'reviews#show'
  get 'user/index'
  get 'users/create'
  get 'users/show'
  get 'users/destroy'
  post 'users/create'
  delete '/destroy/:id', to: 'users#destroy'
  get '/show/:id', to: 'users#show'
  get 'homepage/index'
  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
