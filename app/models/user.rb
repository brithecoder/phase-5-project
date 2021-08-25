class User < ApplicationRecord
    has_secure_password
    # validates_presence_of :email
    # validates_uniqueness_of :email

    has_many :user_brands
    has_many :brands, through: :user_brands
    has_many :user_events
    has_many :events, through: :user_events

     # Returns the hash digest of the given string.
     def self.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                     BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
    end

end
