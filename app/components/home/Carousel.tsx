import { Container } from '../ui/container';

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '../ui/carousel';

export function Carousel() {
  // dummy data, please change pag may cdn na
  const photos = [
    {
      name: 'PizzaPy',
      image:
        'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/476085642_647117237888690_5048259540079263909_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHI2GPJnderjLqZD_onTz_mhl8LobvLU8iGXwuhu8tTyM7eHSLuYoiIOe6Op5d0VKJHbzWWV-QlLwAoC8XevZ3g&_nc_ohc=Vq6trOsC1RsQ7kNvgFESvtF&_nc_oc=Adiv5KZDlvtgxuchvdkXqgT7TQOlV5aif3gCE2ZlbQwMz-LBPNelrYoDMZbwkjvL2qPy9JajR3WJKRXRlBhEFlxr&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=AxfAZaWmN95V1AdUFkQV3Ni&oh=00_AYCLRyoyPE8elh14toICFJM6CKypHE3dCQ9K9UITsqp6eQ&oe=67C23A67',
    },
    { name: 'DevCon', image: '/devcon-logo.svg' },
    { name: 'Google', image: '/google-logo.svg' },
  ];

  return (
    <section className="bg-green-800 py-16">
      <Container>
        <div className="relative overflow-hidden z-10">
          {/* CAROUSEL */}
          <CarouselContainer className="w-full bg-blue-500">
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem
                  key={photo.name}
                  className="bg-green-700 p-6 rounded-lg flex items-center justify-center w-full"
                >
                  <img
                    src={photo.image}
                    alt={photo.name}
                    className="object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

            <CarouselPrevious className="ml-[10%]" />
            <CarouselNext className="mr-[10%]" />
          </CarouselContainer>

          {/* TEXT OVERLAY */}
          <div className="w-full absolute top-0 left-0 text-center text-white mt-10">
            <h2 className="text-3xl font-bold">
              Davao <span className="text-primary">Python</span> Community
            </h2>
            <p>
              where Pythonistas and enthusiasts gather to discuss trends and
              share knowledge
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
