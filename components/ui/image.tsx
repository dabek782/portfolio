import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Image (){
    return(
        <div className="h-80 w-80 mx-30  my-10">
      <Avatar size="default" className="h-80 w-80">
        <AvatarImage
          src="/profilePicture.jpg"
          alt="Jakub Dąbrowski"
        />
      </Avatar> 
    </div>
    )
}