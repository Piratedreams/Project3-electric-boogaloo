require "application_system_test_case"

class ElosTest < ApplicationSystemTestCase
  setup do
    @elo = elos(:one)
  end

  test "visiting the index" do
    visit elos_url
    assert_selector "h1", text: "Elos"
  end

  test "creating a Elo" do
    visit elos_url
    click_on "New Elo"

    fill_in "Division", with: @elo.division
    fill_in "Rank", with: @elo.rank
    click_on "Create Elo"

    assert_text "Elo was successfully created"
    click_on "Back"
  end

  test "updating a Elo" do
    visit elos_url
    click_on "Edit", match: :first

    fill_in "Division", with: @elo.division
    fill_in "Rank", with: @elo.rank
    click_on "Update Elo"

    assert_text "Elo was successfully updated"
    click_on "Back"
  end

  test "destroying a Elo" do
    visit elos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Elo was successfully destroyed"
  end
end
