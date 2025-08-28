import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowDown, Globe2, Hotel, PlaneLanding, PlaneTakeoff, Send } from 'lucide-react'
import React from 'react'


const suggestions = [{
    icon: <Globe2 className='w-5 h-5' />,
    title: "Explore New Zealand",
},
{
    icon: <PlaneTakeoff className='w-5 h-5' />,
    title: "Inspire me with a trip",
},
{
    icon: <PlaneLanding className='w-5 h-5' />,
    title: "Discover the world",
},
{
    icon: <Hotel className='w-5 h-5' />,
    title: "Find a hotel",
},
]

function Hero() {
  return (
    <div className='flex items-center justify-center px-4 mt-40'>
      <div className='max-w-4xl mx-auto text-center space-y-8'>
        {/* Main heading with gradient */}
        <div className='space-y-4'>
          <div className='flex items-center justify-center gap-4 flex-wrap'>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>
              TripMate AI
            </h1>
            <span className='text-2xl md:text-3xl text-muted-foreground font-light'>
              - tell me where you want to go
            </span>
          </div>
        </div>

        {/* Description */}
        <div className='max-w-3xl mx-auto'>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Just describe your dream trip and let our AI create the perfect itinerary for you. 
            From flights to rental cars and activities, we'll handle everything in seconds.
          </p>
        </div>

        {/* CTA Section */}
        <div className='space-y-6 border-2 border-gray-200 rounded-2xl p-4 relative'>
          <Textarea placeholder='Generate a trip from auckland to queenstown' className='w-full h-28 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none resize-none' />
          <Button size={'icon'} className="absolute right-6 bottom-6 cursor-pointer">
            <Send className='w-4 h-4' />
          </Button>
        </div>

        {/* Suggestions */}
        <div className='flex items-center justify-center gap-6 flex-wrap'>
            {suggestions.map((suggestion, index) => (
                <div key={index} className='flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-200 cursor-pointer group'>
                    <div className={`p-1.5 rounded-full ${
                        index === 0 ? 'bg-blue-100 text-blue-600' :
                        index === 1 ? 'bg-green-100 text-green-600' :
                        index === 2 ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                    } group-hover:scale-110 transition-transform duration-200`}>
                        {suggestion.icon}
                    </div>
                    <span className='text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors'>
                        {suggestion.title}
                    </span>
                </div>
            ))}
        </div>

            <div className='w-full'>
                <h2 className='text-xl flex items-center justify-center gap-2 cursor-pointer mb-10 mt-16'>
                    Not sure where to start? <span className='text-primary font-bold'>Watch this video</span> <ArrowDown className='w-4 h-4' />
                </h2>
                <div className='w-full max-w-none'>
                    <HeroVideoDialog className="block dark:hidden w-full" animationStyle='from-center' videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" thumbnailSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" thumbnailAlt='TripMate AI' />
                </div>
            </div>
   
    



      </div>
    </div>
  )
}

export default Hero