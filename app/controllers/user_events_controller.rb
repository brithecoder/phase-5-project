class UserEventsController < ApplicationController
    def index
    user_events = UserEvent.all
    render json: user_events
    end
end
