class Event < ApplicationRecord
    has_many :brand_events
    has_many :brands, through: :brand_events
    has_many :user_events
    has_many :users, through: :user_events
end
