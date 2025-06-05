# use triple single quote [''' ''']
# for different line print
 

print('''Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.

When the blazing sun is gone,
When he nothing shines upon,
Then you show your little light,
Twinkle, twinkle, all the night.

Then the traveler in the dark
Thanks you for your tiny spark,
How could he see where to go,
If you did not twinkle so?

In the dark blue sky you keep,
Often through my curtains peep
For you never shut your eye,
Till the sun is in the sky.

As your bright and tiny spark
Lights the traveler in the dark,
Though I know not what you are,
Twinkle, twinkle, little star.''')


# 3rd que
# on the terminal and download  "pip install pyttsx3"
# to speak any thing from leptop we use this Module

# import pyttsx3
# engine = pyttsx3.init()
# engine.say("   Hi,Atharva Gupta How are you")
# engine.runAndWait()




# 4rt que

import os
# Specify the directory you want to list
directory_path = '/'

# List all files and directories in the specified path
contents = os.listdir(directory_path)

# Print each file and directory name
for item in contents:

    print(item)
