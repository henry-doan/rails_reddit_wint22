class Api::SubsController < ApplicationController
  # traffic directors
  # base off of the route, we are going to do one of the methods

  # methods - actions, main features we can do in our app, crud
# index GET, grab all of our records of the table, 
# show GET, Id, grab one of the records base off of the id 
# create POST, attr, obj , go through vaidates, params, 
  # if else, create the obj and store within our table 
# update PUT, id, obj, go through vaidates, params, 
  # if else, update the obj base off of id and store within our table 
# destroy DELETE, id delete from the table
  
  # follow pattern to fill out the controller

  # new edit - forms which is handle on the react side not here

  # Controller for all actions they to return 
  # html json, xml, redirect to a action that does

  # skinny controller fat model
  # callback, trigger logic on a actions 
  # before_action only, except
  # after_action
  # skip_before_action
  # skip_after_action

  # class ApplicationController < ActionController::Base
  #   before_action :verify_paid, only: [:index, :create]
  
  #   def verify_paid
  #     @paid = true
  #   end
  # end

  # Pattern
  # Model, -> Sub
  # Singular, Capital 
  # def index 
  #   render json: Model_name.all 
  # end

  # def show
  #   @model_name = Model_name.find(params[:id])
  #   render json: @model_name
  # end

  # def create
  #   @model_name = Model_name.new(model_name_params)
  #   if @model_name.save
  #     render json: @model_name
  #   else
  #     render json: { errors: @model_name.errors }, status: :unprocessable_entity
  #   end
  # end

  # def update
  #   @model_name = Model_name.find(params[:id])
  #   if @model_name.update(model_name_params)
  #     render json: @model_name
  #   else
  #     render json: { errors: @model_name.errors }, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @model_name = Model_name.find(params[:id])
  #   @model_name.destroy
  #   render json: { message: 'Something deleted' }
  # end

  # private 
  #   def model_name_params
  #     params.require(:model_name).permit(:attr, :attr2)
  #   end 
  # Model -> Sub

  # after a controller is filled out, then move on to the front end 
  # and fill that out
  before_action :set_sub, only: [:show, :update, :destroy]

  def index
    render json: Sub.all
  end

  def show
    # @sub = Sub.find(params[:id])
    render json: @sub
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save 
      render json: @sub 
    else
      render json: { errors: @sub.errors }, status: :unprocessable_entity
    end
  end

  def update
    # @sub = Sub.find(params[:id])
    if @sub.update(sub_params)
      render json: @sub
    else
      render json: { errors: @sub.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    # @sub = Sub.find(params[:id])
    @sub.destroy
    render json: { message: 'Sub deleted' }
    # or 
    # Sub.find(params[:id]).destroy
    # render json: { message: 'Sub deleted' }
  end

  private 
    # { sub: { title: 'puppies'} } -> permitted
    # { sub: { title: 'puppies', email: 'asdfaf@adfasdf', age: 2323} } -> no permitted
    # prevents sql injection

    # { sub: { title: 'puppies', user: 'SELECT SSN, CCNUM FROM USER'} }
    # { sub: { title: 'SELECT SSN, CCNUM FROM USER'} }
    # make sure it is in a right format and passing the right fields
    def sub_params
      params.require(:sub).permit(:title) 
    end

    def set_sub
      @sub = Sub.find(params[:id])
    end
end
