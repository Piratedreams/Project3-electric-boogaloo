require 'test_helper'

class ElosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @elo = elos(:one)
  end

  test "should get index" do
    get elos_url
    assert_response :success
  end

  test "should get new" do
    get new_elo_url
    assert_response :success
  end

  test "should create elo" do
    assert_difference('Elo.count') do
      post elos_url, params: { elo: { division: @elo.division, rank: @elo.rank } }
    end

    assert_redirected_to elo_url(Elo.last)
  end

  test "should show elo" do
    get elo_url(@elo)
    assert_response :success
  end

  test "should get edit" do
    get edit_elo_url(@elo)
    assert_response :success
  end

  test "should update elo" do
    patch elo_url(@elo), params: { elo: { division: @elo.division, rank: @elo.rank } }
    assert_redirected_to elo_url(@elo)
  end

  test "should destroy elo" do
    assert_difference('Elo.count', -1) do
      delete elo_url(@elo)
    end

    assert_redirected_to elos_url
  end
end
