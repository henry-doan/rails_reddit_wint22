class Topic < ApplicationRecord
  belongs_to :sub
  has_many :comments, dependent: :destroy
  vaidates :title, :body, presence: true
end
