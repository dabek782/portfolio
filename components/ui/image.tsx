import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Image (){
    return(
        <div className="h-52 w-52 mx-30  my-20">
      <Avatar size="default" className="h-52 w-52">
        <AvatarImage
          src="/profilePicture.jpg"
          alt="Jakub Dąbrowski"
          
          
        />

      </Avatar>
    
    </div>
    )
}