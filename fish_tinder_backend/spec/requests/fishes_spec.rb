require 'rails_helper'

describe "Fish API", type: :request do
  it "gets a list of Fish" do
    # Create a new fish in the Test Database (not the same one as development)
    Fish.create(name: "Bruce", age: 38, enjoys: "Befriending fish and not eating them.", species: "🦈")

    # Make a request to the API
    get '/fishes'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we get a successful response
    expect(response).to have_http_status(:ok)

    # Assure that we got one result back as expected
    expect(json.length).to eq(1)
  end

  it "creates a fish" do
    # The params we are sending with the request
    fish_params = {
      fish: {
        name: "Crush",
        age: 150,
        enjoys: "Ridin' the current, dude",
        species: "🐢"
      }
    }

    # Send a request to the server
    post '/fishes', params: fish_params

    # Assure that we get a request back
    expect(response).to have_http_status(:ok)

    # Look up the fish we expected to be created in the Database
    new_fish = Fish.first

    Assure that the created fish has the correct attributes
    expect(new_fish.name).to eq("Crush")
  end

  it "doesn't create a fish without a name" do
    fish_params = {
      fish: {
        age: 4,
        enjoys: "Swimming",
        species: "🐟"
      }
    }
    post '/fishes', params: fish_params
    # Test to make sure our status is correct when the record can't be created
    expect(response.status).to eq(422)
    # Check that the API displays what's wrong so that the frontend can prompt the user to fix it
    json = JSON.parse(response.body)
    # Errors are returned as an array because there might be multiple errors in multiple attributes
    expect(json["name"]).to include("can't be blank")
  end

  it "doesn't create a fish without an age" do
    fish_params = {
      fish: {
        name: "Feesh",
        enjoys: "Sweem",
        species: "placeholder"
      }
    }
    post '/fishes', params: fish_params
    expect(response.status).to eq(422)
    json = JSON.parse(response.body)
    expect(json["age"]).to include("can't be blank")
  end

  it "doesn't create a fish without an enjoys" do
    fish_params = {
      fish: {
        name: "feesh",
        age: 3,
        species: "placeholder"
      }
    }
    post '/fishes', params: fish_params
    expect(response.status).to eq(422)
    json = JSON.parse(response.body)
    expect(json["enjoys"]).to include("can't be blank")
  end

  it "doesn't create a fish with an enjoys of less than 5 characters" do
    fish_params = {
      fish: {
        name: "feesh",
        age: 3,
        enjoys: "Swim",
        species: "placeholder"
      }
    }
    post '/fishes', params: fish_params
    expect(response.status).to eq(422)
    json = JSON.parse(response.body)
    expect(json["enjoys"]).to include("Please tell us more")
  end

  it "doesn't create a fish without a species" do
    fish_params = {
      fish: {
        name: "Feesh",
        age: 3,
        enjoys: "Sweem"
      }
    }
    post '/fishes', params: fish_params
    expect(response.status).to eq(422)
    json = JSON.parse(response.body)
    expect(json["species"]).to include("can't be blank")
  end

end
