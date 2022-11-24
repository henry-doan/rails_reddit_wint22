Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # http verb - how the browser commuicates the crud action
  # Create -> POST
  # Read -> GET
  # Update -> PUT / PATCH
  # Destroy -> DELETE 

  # rails this file does navigation
  # rails with react, lead us somewhere in our controller 
  # table of content

  # manually, custom function 
  # http verb 'urlpath', to: 'controller(s)#action'
  # get '/subs', to: 'subs#index'
    # :id -> placeholder
    # :parent_id
      #  /subs/23
  # get '/subs/:id', to: 'subs#show'
  # post '/subs/', to: 'subs#create'
  # put '/subs/:id', to: 'subs#update'
  # delete '/subs/:id', to: 'subs#destroy'

  # resources :controller(s)
  # resources :subs, only: [:show, :create]
  # resources :subs, except: [:index, :update]

  namespace :api do 
    resources :subs do
      resources :topics
    end

    resources :topics, except: [:index, :show, :create, :update, :destroy] do
      resources :comments
    end

    # resources :comments, except: [:index, :show, :create, :update, :destroy] do
    #   resources :likes
    # end

  end

  # if there is a another model and is a child of this model then the
  # routes be embedded routes

  # resources :parent(s) do 
  #   resources :child(s)
  # end

  # only two level deep, any more will be too hard

  # * don't do this
  # resources :parent(s) do 
  #   resources :child(s) do 
  #     resources :grandchild(s) 
        #  resources :grandgrandchild
  #   end
  # end

  # make things more complex
  
  # resources :parent(s) do 
  #   resources :child(s)
  # end

  # this create duplicate routes for the child
  # resources :child(s), except: [:index, :show, :create, :update, :destroy] do 
  #   resources :grandchild(s)
  # end

end
