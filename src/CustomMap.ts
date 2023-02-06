export interface MarkAble {
  location: {
    lat: number;
    lng: number;
  };
  markAbleContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      <HTMLElement>document.getElementById(divId),
      {
        zoom: 1,
        center: { lat: 0, lng: 0 }
      }
    );
  }

  addMarker(markAble: MarkAble): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markAble.location.lat,
        lng: markAble.location.lng
      }
    });

    marker.addListener('click', (): void => {
      const info = new google.maps.InfoWindow({
        content: markAble.markAbleContent()
      });
      info.open(this.googleMap, marker);
    });
  }
}
