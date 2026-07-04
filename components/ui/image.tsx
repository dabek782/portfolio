import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function Image() {
    return (
        <div className="mx-30 my-10 h-80 w-80">
            <Avatar size="default" className="h-80 w-80">
                <AvatarImage src="/profilePicture.jpg" alt="Jakub Dąbrowski" />
            </Avatar>
        </div>
    )
}
