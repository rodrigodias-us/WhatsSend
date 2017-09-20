require 'firebase'

class WhatsSend

  def initialize(receiver_url, firebase_url)
    @receiver_url = receiver_url
    @firebase_url = firebase_url

    connect_firebase
    get_firebase_first_data
  end

  def loop_init
    loop { 
      get_firebase_data
    }
  end

  private
  def connect_firebase
    @firebase = Firebase::Client.new(@firebase_url)
  end

  def get_firebase_first_data
    @messages = extract_messages(@firebase.get('/'))
  end

  def get_firebase_data
    @new_messages = extract_messages(@firebase.get('/'))
    if @new_messages && @messages
      new_messages(@new_messages - @messages || @messages - @new_messages)
    end
    @messages = @new_messages
  end

  def extract_messages(messages)
    messages.body.map do |e|
      next if e.nil? 
      e["msgs"].map do |msg| 
        next if msg.nil? 
        author = msg["author"] ? msg["author"].gsub!("@c.us", "") : "me"
        { author: author , msg: msg["body"] }
      end
    end
  end

  def new_messages(new_messages)
    puts new_messages
  end

end