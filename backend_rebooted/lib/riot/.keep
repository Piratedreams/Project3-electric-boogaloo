require 'faraday'
require 'json'

class Connection
  BASE = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${formData.search}?api_key='

  def self.api
    Faraday.new(url: BASE) do |faraday|
      faraday.response :logger
      faraday.adapter Faraday.default_adapter
      faraday.headers['Content-Type'] = 'application/json'
      faraday.headers['X-Mashape-Key'] = ENV['RGAPI-8e62ff29-d636-45c8-80a5-ab4149b7e68a']
    end
  end
end