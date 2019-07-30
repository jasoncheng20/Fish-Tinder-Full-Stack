require 'rails_helper'

RSpec.describe Fish, type: :model do
  it "should validate name" do
    fish = Fish.create
    expect(fish.errors[:name]).to_not be_empty
  end

  it "should validate age" do
    fish = Fish.create
    expect(fish.errors[:age]).to_not be_empty
  end

  it "should validate enjoys" do
    fish = Fish.create
    expect(fish.errors[:enjoys]).to_not be_empty
  end

  it "should validate species" do
    fish = Fish.create
    expect(fish.errors[:species]).to_not be_empty
  end
end
