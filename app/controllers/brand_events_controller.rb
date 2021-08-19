class BrandEventsController < ApplicationController 
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response  

    def index
    brand_events = BrandEvent.all
    render json:brand_events
    end
end
