class Brand < ApplicationRecord
    has_many :brand_events
    has_many :events, through: :brand_events
    has_many :user_brands
    has_many :users, through: :user_brands
end
