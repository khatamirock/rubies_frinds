class PagesController < ApplicationController
  def home
    puts ">>>>>>kire vaii"
    @mama= "rock"
    @jmama="James ROCK...."
    @arr = ["Item 1", "Item 2", "Item 3"] 
  end

  def about
    @message = params[:msg]
    @id= params[:id]
    

    @aboutName="my name is ROCK!!"
  end
end