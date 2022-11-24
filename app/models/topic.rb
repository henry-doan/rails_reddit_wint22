class Topic < ApplicationRecord
  belongs_to :sub
  vaidates :title, :body, presence: true
end
