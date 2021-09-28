# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server


# export const API_BASE_URL =`https://api.yelp.com/v3`;
# export const BEARER_TOKEN =`aiEIhPf7DsNWQLj4LeNKz1XAtXfPlYNeqzjUmJOasRxUmvXyH71wuZq0yRaEyRmbGwTnYEWX0wHtbfPNhvdQ-FpUnKokRyO8VlCMnAj3ttD2M9NnTi-NEHJoZ8MSYXYx`;