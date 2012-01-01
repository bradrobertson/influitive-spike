require 'sinatra'
require 'sass'

get '/' do
  erb :app
end

%w{admin email templates whitelabel challenge}.each do |page|
  get "/#{page}" do
    erb page.to_sym
  end
end

get '/app.css' do
  scss :'stylesheets/app'
end