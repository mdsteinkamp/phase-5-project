class FallbackController < ActionController::API
  def index
    render file: 'public/index.html'
  end
end
